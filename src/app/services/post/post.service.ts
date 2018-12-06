// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * @desc
 */
@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    getList() {
    	return this.http.get(this.apiUrl);
    }

    getOne({id = 0}) {
    	return this.http.get(`${this.apiUrl}/${id}`);
    }

}
