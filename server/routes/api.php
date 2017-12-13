<?php

Route::get('auth/login', 'AuthController@test');

Route::post('auth/login', 'AuthController@authenticate');

Route::prefix('admin')->middleware('jwt.auth')->group(function () {
	///////////
	// USERS //
	///////////
	Route::prefix('user')->group(function () {
		Route::get('profile', 'UserController@profile');
	});

	////////////
	// ORDERS //
	////////////
	Route::prefix('ordenes')->group(function () {
		// Order List
		Route::get('', 'OrdersController@list');
		// Status List
		Route::get('status', 'OrdersController@listStatus');
		// Order
		Route::get('{id}', 'OrdersController@detail');
		Route::put('{id}', 'OrdersController@update');
		// Order Items
		Route::put('{id}/item', 'OrdersController@updateItem');
		Route::post('{id}/item', 'OrdersController@createItem');
		Route::delete('{id}/item', 'OrdersController@deleteItem');
		// Order Status
		Route::get('{id}/status', 'OrdersController@statusHistory');
		Route::post('{id}/status', 'OrdersController@createStatus');
	});

	////////////
	// IMPORT //
	////////////
	Route::prefix('importar')->group(function () {
		// Importar Productos
		Route::post('productos', 'ImportController@products');
		// Importar Stock Model Codes
		Route::post('stockmodels', 'ImportController@stockModels');
		// Importar Variaciones de Productos
		Route::post('variaciones', 'ImportController@variations');
	});
});
