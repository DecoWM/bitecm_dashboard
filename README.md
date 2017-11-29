# cgl-backend
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

#TODO
- Preparar staging server con la arquitectura definida y documentarla para un PROD server
- Agregar tabla tipo de carga.


# PREGUNTAS RENATO
- Routing order tiene estados? de ser así cuales son?.
- Cotización tiene algún estado? los estados pueden ser para dar seguimiento por ejemplo.
- Cuales son los datos/atributos de origen y destino en Routing Order.
- Cuales son los datos/atributos de: Cliente, Agencia Externa, Carga, .
- Cotización Origen y destino por carga?
-

