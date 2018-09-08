
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

		Route::post('reportes/general_orders', 'OrdersController@reportGeneralOrders');
		Route::post('reportes/general_sales', 'OrdersController@reportGeneralSales');
		Route::post('reportes/best_sellers', 'OrdersController@reportBestSellers');
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
	// IMAGES //
	/////////////
	Route::prefix('imagenes')->group(function() {
		//Slider
		Route::post('', 'ImageController@storeImage');
		Route::put('{id}', 'ImageController@updateImage');

		Route::get('{type}', 'ImageController@listImages');
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

		// Chip
		Route::get('chip', 'ProductController@showChip');

		// By ID
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

	///////////
	// PLAN  //
	///////////
	// CLES 05-04-2018
	Route::prefix('planes')->group(function () {
		//Product list
		Route::get('', 'PlanController@list');
		Route::get('variation', 'PlanController@listVariationPlan');
		Route::get('affiliation', 'PlanController@listAffiliationPlan');
		Route::put('{plan_id}/publish', 'PlanController@publishPlan');
		Route::put('{plan_id}/hide', 'PlanController@hidePlan');
		Route::get('{plan_id}', 'PlanController@showPlan');

		Route::put('{plan_infocomercial_id}', 'PlanController@savePlanInfoComercial');
		Route::post('', 'PlanController@storePlan');
		Route::post('{plan_id}', 'PlanController@insertarPlanInfoComercial');

		Route::put('{plan_infocomercial_id}/publishinfocomercial', 'PlanController@publishPlanInfoComercial');
		Route::put('{plan_infocomercial_id}/hideinfocomercial', 'PlanController@hidePlanInfoComercial');

		Route::get('{plan_id}/getAffiliationsPlan', 'PlanController@getAffiliationsPlan');

		Route::get('{plan_id}/getInformacionComercialPorPlan', 'PlanController@getInformacionComercialPorPlan');
	});

	//////////////
	// CONTRATO //
	//////////////
	// CLES 24-08-2018
	Route::prefix('contratos')->group(function () {
		//Product list
		Route::get('', 'ContratoController@list');
		Route::put('{contract_id}/publish', 'ContratoController@publishContract');
		Route::put('{contract_id}/hide', 'ContratoController@hideContract');
		Route::post('', 'ContratoController@storeContract');
		Route::get('{contract_id}', 'ContratoController@getContract');
		Route::post('{contract_id_update}', 'ContratoController@updateContract');
		/*
		Route::get('variation', 'PlanController@listVariationPlan');
		Route::get('affiliation', 'PlanController@listAffiliationPlan');
		Route::get('{plan_id}', 'PlanController@showPlan');
		*/
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
//  TEST   //
/////////////
Route::prefix('test')->group(function () {
	//Product list
	//Route::get('promo', 'ProductController@testPromo');
});

Route::prefix('config')->group(function () {
	Route::get('public', function() {
		return response()->json([
			'notifServerUrl' => \Config::get('settings.notification_server_url')
		]);
	});
});

Route::get('/config_cache', function() {
  Artisan::call('config:cache');
  echo 'local config cache';
});
