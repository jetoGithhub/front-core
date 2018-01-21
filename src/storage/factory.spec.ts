import  { StorageFactory as storage } from './factory';
import  { BaseBrowserStorage, BaseMemoryStorage } from '../storage/index';

var sessionStorage;
var _localStorage;
var memoryStorage;

describe('Storage Factory', ()=>{


	describe('Cuando se crea un session storage', () => {
		beforeEach( ()=> {
			var store = {};

		    spyOn(window.localStorage, 'getItem').and.callFake( (key:string):String => {
		    	return store[key] || null;
		    });

		    spyOn(window.localStorage, 'setItem').and.callFake( (key:string, value: string):String => {
		    	store[key] = value;
		    	return store[key];
		    });
		     spyOn(window.localStorage, 'clear').and.callFake( () => {
		    	store = {};
		    });

			_localStorage = storage('local');
		});
		it('iiiiii', () => {
			expect(_localStorage).toEqual(jasmine.any(BaseBrowserStorage));
		})

		it('Deberia ser un browser storage valido', ()=>{
			expect( _localStorage ).toBeDefined();
		});

		it('Deberia estar definido el metodo set', ()=>{
			expect( _localStorage.set ).toBeDefined();
		});

		it('Deberia estar definido el metodo get', ()=>{
			expect( _localStorage.get ).toBeDefined();
		});
	});
})