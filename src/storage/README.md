STORAGE
=======
![logo](StorageModel.png)

Como Usar
---------

````javascript

import { 
	BaseStorage, 
	storage 
} from "@bcp/core"

class MyFirstClass {
	
	private localStorage;

	construtor(){
		this.localStorage: BaseStorage = storage('local');
	}


	myFirstMethod(){
		var data = {'hello': 'world'};
		.....

		this.localStorage.set('dataMyfirstMethod', data);

		......

		return data;
	}
}
````

Interfaces
----------

| Nombre | Descripcion | 
|--------|-------------|
|BaseStorage| -------- |

Metodos
-------

| Nombre | Descripcion | 
|--------|-------------|
| GET | -------- |
| SET | -------- |
| CLEAR | -------- |


