// core
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// service
import { PostService } from '@services';

/**
 * @desc
 */
@Component({
 	selector: 'detail-page',
	templateUrl: './detail.page.html',
 	styleUrls: ['./detail.page.scss'],
 	providers: [PostService],
})
export class DetailPage {
 	
 	constructor(private postService: PostService,
 				private route: ActivatedRoute,
 	) { }

 	// view variables
 	public post;

 	// life cycle
 	ngOnInit() {
 		this.route.params.subscribe( params => {
			this.loadPost(params.postId);
 		});
 	}

 	// methods
 	async loadPost(id) {
 		const resp = await this.postService.getOne({id}).toPromise();
 		this.post = resp;
 	}

}
