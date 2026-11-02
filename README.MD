--PARA AGREGAR un nuevoo usuario 
curl.exe -X POST "http://localhost:3000/user" -H "Content-Type: application/json" --data-binary '{\"nombre\":\"Ricardo\",\"apellido\":\"Aquino\",\"email\":\"ricardo@gmail.com\",\"telefono\":\"998877665\"}'

waaaaaa