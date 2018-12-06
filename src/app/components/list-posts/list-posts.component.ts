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
 	
 	constructor(private postService: PostService) { }

 	// view variables
 	public posts;

 	// life cycle
 	ngOnInit() {
		this.loadPosts();
 	}

 	// methods
 	async loadPosts() {
 		const resp = await this.postService.getList().toPromise();
 		this.posts = resp;
 	}

}
