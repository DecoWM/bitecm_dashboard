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
		Route::get('{id}/simple', 'OrdersController@detailSimple');
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

	/////////////
	// PRODUCT //
	/////////////
	Route::prefix('productos')->group(function () {
		//Product list
		Route::get('', 'ProductController@list');
		Route::post('', 'ProductController@storeProduct');
		// Brand
		Route::get('brand', 'ProductController@listBrand');
		// Category
		Route::get('category', 'ProductController@listCategory');
		// Color
		Route::get('color', 'ProductController@listColor');
		Route::post('color', 'ProductController@storeColor');

		Route::get('variation', 'ProductController@listVariation');

		//
		Route::get('{product_id}', 'ProductController@showProduct');
		Route::put('{product_id}', 'ProductController@updateProduct');
		Route::put('{product_id}/specifications', 'ProductController@updateSpecifications');

		Route::put('{product_id}/publish', 'ProductController@publishProduct');
		Route::put('{product_id}/hide', 'ProductController@hideProduct');

		Route::get('{product_id}/smc', 'ProductController@listStockModelCode');
		Route::post('{product_id}/smc', 'ProductController@storeStockModelCode');

		Route::get('{product_id}/smc/{stock_model_id}', 'ProductController@getStockModelCode');
		Route::put('{product_id}/smc/{stock_model_id}', 'ProductController@updateStockModelCode');

		Route::get('{product_id}/variation/prepaid', 'ProductController@listPrepaidProductVariation');
		Route::get('{product_id}/variation/postpaid/{affiliation_id}/{contract_id}', 'ProductController@listPostpaidProductVariation');

		Route::post('{product_id}/variation/prepaid', 'ProductController@storePrepaidVariation');
		Route::post('{product_id}/variation/postpaid', 'ProductController@storePostpaidProductVariation');

		Route::put('{product_id}/variation/prepaid', 'ProductController@updatePrepaidVariation');
		Route::put('{product_id}/variation/postpaid', 'ProductController@updatePostpaidProductVariation');

		Route::delete('/image/{product_image_id}', 'ProductController@deleteProductImage');
	});

	Route::prefix('plan')->group(function () {
		Route::prefix('prepago')->group(function () {
			Route::get('', 'ProductController@listPrepaid');
		});

		Route::prefix('postpago')->group(function () {
			Route::get('', 'ProductController@listPostpaid');
		});
	});

	Route::prefix('affiliation')->group(function () {
		Route::get('', 'ProductController@listAffiliation');
	});


	Route::prefix('contract')->group(function () {
		Route::get('', 'ProductController@listContract');
	});

});

/////////////
// PRODUCT //
/////////////
Route::prefix('product')->group(function () {
	//Product list
	Route::get('', 'ProductController@list');
	Route::post('', 'ProductController@storeProduct');
	// Brand
	Route::get('brand', 'ProductController@listBrand');
	// Category
	Route::get('category', 'ProductController@listCategory');
	// Color
	Route::get('color', 'ProductController@listColor');
	Route::post('color', 'ProductController@storeColor');

	Route::get('variation', 'ProductController@listVariation');

	//
	Route::get('{product_id}', 'ProductController@showProduct');
	Route::put('{product_id}', 'ProductController@updateProduct');
	Route::put('{product_id}/specifications', 'ProductController@updateSpecifications');

	Route::put('{product_id}/publish', 'ProductController@publishProduct');
	Route::put('{product_id}/hide', 'ProductController@hideProduct');

	Route::get('{product_id}/smc', 'ProductController@listStockModelCode');
	Route::post('{product_id}/smc', 'ProductController@storeStockModelCode');

	Route::get('{product_id}/smc/{stock_model_id}', 'ProductController@getStockModelCode');
	Route::put('{product_id}/smc/{stock_model_id}', 'ProductController@updateStockModelCode');

	Route::get('{product_id}/variation/prepaid', 'ProductController@listPrepaidProductVariation');
	Route::get('{product_id}/variation/postpaid', 'ProductController@listPostpaidProductVariation');

	Route::post('{product_id}/variation/prepaid', 'ProductController@storePrepaidVariation');
	Route::post('{product_id}/variation/postpaid', 'ProductController@storePostpaidProductVariation');

	Route::put('{product_id}/variation/prepaid', 'ProductController@updatePrepaidVariation');
	Route::put('{product_id}/variation/postpaid', 'ProductController@updatePostpaidProductVariation');

	Route::delete('/image/{product_image_id}', 'ProductController@deleteProductImage');
});

Route::prefix('plan')->group(function () {
	Route::prefix('prepago')->group(function () {
		Route::get('', 'ProductController@listPrepaid');
	});

	Route::prefix('postpago')->group(function () {
		Route::get('', 'ProductController@listPostpaid');
	});
});

Route::prefix('affiliation')->group(function () {
	Route::get('', 'ProductController@listAffiliation');
});


Route::prefix('contract')->group(function () {
	Route::get('', 'ProductController@listContract');
});
