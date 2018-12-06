// core
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// material
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
// service
import { PostService } from '@services';

/**
 * @desc
 */
interface postDataInteface {
	id: number,
	body: string,
 	title: string;
	userId: number;
}

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

 	constructor(
 		private router: Router,
 		private postService: PostService
 	) { }

 	// view variables
 	public loading: boolean = true;
 	public posts: any;
  	public dataSource;
	public displayedColumns: string[] = ['id', 'title', 'userId', 'body'];

	// sub views
	@ViewChild(MatPaginator) paginator: MatPaginator;
 	@ViewChild(MatSort) sort: MatSort;

 	// life cycle
 	ngOnInit() {
		this.loadPosts();
 	}

 	// methods
 	selectRow(row) {
 		this.router.navigate(['/detail', row.id]);
 	}

 	applyFilter(filterValue: string) {
   		this.dataSource.filter = filterValue.trim().toLowerCase();
  	}

 	async loadPosts() {
 		const resp = <[postDataInteface]> await this.postService.getList().toPromise();
 		const postData = resp.map( item => <postDataInteface> {...item, body: item.body.substring(0, 50).concat('...')});
 		this.dataSource = new MatTableDataSource(postData);
 		this.dataSource.paginator = this.paginator;
 		this.dataSource.sort = this.sort;
 		this.loading = false;
 	}

}
