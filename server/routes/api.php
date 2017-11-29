<?php

Route::post('login', 'AuthController@authenticate');

Route::middleware('jwt.auth')->group(function () {
	///////////
	// USERS //
	///////////
	Route::prefix('user')->group(function () {
		Route::get('profile', 'UserController@profile');
	});

	/////////////
	// SELLERS //
	/////////////
	Route::prefix('sellers')->group(function () {
		Route::get('all', 'SellersController@all');
		Route::post('create', 'SellersController@create');
	});

	/////////////
	// CLIENTS //
	/////////////
	Route::prefix('clients')->group(function () {
		Route::get('all', 'ClientsController@all');
		Route::post('create', 'ClientsController@create');
	});

	////////////////
	// QUOTATIONS //
	////////////////
	Route::prefix('quotations')->group(function () {
		Route::get('all', 'QuotationsController@all');
		Route::get('seller/{id}', 'QuotationsController@bySeller');
		Route::post('create', 'QuotationsController@create');
	});

	////////////////////
	// ROUTING ORDERS //
	////////////////////
	Route::prefix('routing-orders')->group(function () {
		Route::get('all', 'RoutingOrdersController@all');
		Route::get('seller/{id}', 'RoutingOrdersController@bySeller');
		Route::post('create', 'RoutingOrdersController@create');
	});
});
