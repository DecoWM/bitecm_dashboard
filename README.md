# BITEL DASHBOARD

/app (SmartAdmin con angular 4)
	-- src
		-- app
			-- shared
				-- smartadmin.config.ts <--- Aquí seteamos la ruta al API
/server (Laravel 5.5 API)

# SERVER
"tymon/jwt-auth": "dev-develop" <--- esto puede cambiar

# Instalación
- smartadmin.config.ts.example -> smartadmin.config.ts (crear tu propia copia local en app/src/app/shared) remplacemos la variable API_URL por tu variable local o de prod.
- crear archivo .env en sever "php artisan key:generate" + "php artisan jwt:secret"

