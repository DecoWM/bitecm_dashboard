<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderStatusChanged extends Mailable
{
  use Queueable, SerializesModels;

  public $order;
  public $status;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  /*public function __construct($order)
  {
      $this->order = $order;
  }*/

  public function __construct($order, $status) {
    $this->order = $order;
    $this->status = $status;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    return $this
      ->subject("Tu pedido #{$this->order->order_id} ha cambiado a estado {$this->status->order_status_name}")
      ->view('emails.status_changed', [
        'order' => $this->order,
        'status' => $this->status
      ]);
  }
}
