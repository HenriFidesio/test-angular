// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @desc
 */
@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

}
