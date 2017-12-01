<?php

Route::post('api/auth/login', 'AuthController@authenticate');

Route::get('api/auth/login', 'AuthController@test');

Route::prefix('api/admin')->middleware('jwt.auth')->group(function () {
	///////////
	// USERS //
	///////////
	Route::prefix('user')->group(function () {
		Route::get('profile', 'UserController@profile');
	});

	/////////////
	// ORDERS //
	/////////////
	Route::prefix('ordenes')->group(function () {
		Route::get('', 'OrdersController@list');
		Route::get('{id}', 'OrdersController@detail');
		Route::put('{id}', 'OrdersController@update');
		Route::get('{id}/status', 'OrdersController@statusHistory');
		Route::post('{id}/status', 'OrdersController@createStatus');
	});
});
