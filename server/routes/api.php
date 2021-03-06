
<?php

Route::get('auth/login', 'AuthController@test');
Route::post('auth/refreshToken', 'AuthController@refreshToken');
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
		Route::post('filter', 'OrdersController@filterList');
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
		// Save store by order
		Route::get('{order_id}/{store_id}', 'OrdersController@saveStore');

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
	// MARCA //
	///////////
	Route::prefix('marcas')->group(function () {
		//Product list
		Route::get('', 'MarcaController@list');
		Route::put('{brand_id}/publish', 'MarcaController@publishBrand');
		Route::put('{brand_id}/hide', 'MarcaController@hideBrand');
		Route::post('', 'MarcaController@storeBrand');
		Route::get('{brand_id}', 'MarcaController@getBrand');
		Route::post('{brand_id_update}', 'MarcaController@updateBrand');

	});

	///////////
	// PLAN  //
	///////////
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
	// SUCURSAL //
	//////////////
	Route::prefix('sucursales')->group(function () {
		//Product list
		Route::get('', 'SucursalController@list');
		Route::put('{branch_id}/publish', 'SucursalController@publishBranch');
		Route::put('{branch_id}/hide', 'SucursalController@hideBranch');
		Route::post('', 'SucursalController@storeBranch');
		Route::get('{branch_id}', 'SucursalController@getBranch');
		Route::post('{branch_id_update}', 'SucursalController@updateBranch');

	});

	//////////////
	// TIENDA //
	//////////////
	Route::prefix('tiendas')->group(function () {
		//Product list
		Route::get('', 'TiendaController@list');
		Route::get('branches', 'TiendaController@listBranches');
		Route::put('{store_id}/publish', 'TiendaController@publishStore');
		Route::put('{store_id}/hide', 'TiendaController@hideStore');
		Route::post('', 'TiendaController@storeStore');
		Route::get('{store_id}', 'TiendaController@getStore');
		Route::post('{store_id_update}', 'TiendaController@updateStore');
		Route::get('{branch_id}/getDistricts', 'TiendaController@listDistricts'); 
		Route::get('{store_id}/getDistrictsByStore', 'TiendaController@listDistrictsByStore'); 

	});

	//////////////
	// DISTRITOS //
	//////////////
	Route::prefix('distritos')->group(function () {
		//Product list
		Route::get('', 'DistritoController@list');

		Route::get('departments', 'DistritoController@listDepartments');
		Route::get('branches', 'DistritoController@listBranches');
		Route::get('{departament_id}', 'DistritoController@listProvinces');
		Route::get('{province_id}/getDistrictsByProvince', 'DistritoController@listDistricts');

		Route::put('{district_id}/publish', 'DistritoController@publishDistrict');
		Route::put('{district_id}/hide', 'DistritoController@hideDistrict');
		//Route::post('', 'DistritoController@storeDistrict');
		Route::get('{district_id}', 'DistritoController@getDistrict');
		Route::post('', 'DistritoController@updateDistrict');
		/*
		Route::get('variation', 'PlanController@listVariationPlan');
		Route::get('affiliation', 'PlanController@listAffiliationPlan');
		Route::get('{plan_id}', 'PlanController@showPlan');
		*/
	});

	//////////////
	// CONTRATO //
	//////////////
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

	//////////////
	// USUARIO //
	//////////////
	Route::prefix('usuarios')->group(function () {
		//Product list
		Route::get('', 'UsuarioController@list');
		Route::put('{id}/publish', 'UsuarioController@publishUser');
		Route::put('{id}/hide', 'UsuarioController@hideUser');
		Route::post('', 'UsuarioController@storeUser');
		Route::get('{id}', 'UsuarioController@getUser');
		Route::post('{id_update}', 'UsuarioController@updateUser');
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
