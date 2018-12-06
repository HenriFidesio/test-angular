// core
import { Component } from '@angular/core';
import { PostService } from '@services';

/**
 * @desc
 */
@Component({
 	selector: 'list-posts-comp',
	templateUrl: './list-posts.component.html',
 	styleUrls: ['./list-posts.component.scss'],
 	providers: [PostService]
})
export class ListPostsComp {
 	
 	constructor(postService: PostService) {

 	}

}
