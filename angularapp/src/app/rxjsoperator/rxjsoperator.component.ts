import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, interval, of, timer } from 'rxjs';
import { mergeMap, take, takeLast, takeUntil } from 'rxjs/operators';


interface User{
  id:number
}

interface Post{
  id:number
}


@Component({
  selector: 'app-rxjsoperator',
  templateUrl: './rxjsoperator.component.html',
  styleUrls: ['./rxjsoperator.component.css']
})
export class RxjsoperatorComponent implements OnInit {

  USERS = 'https://jsonplaceholder.typicode.com/users';
  POSTS = 'https://jsonplaceholder.typicode.com/posts';

  data: [User[], Post[]];
  constructor(http: HttpClient) {

    // get request.............................................
   const users = http.get<User[]>(this.USERS);
   const posts = http.get<Post[]>(this.POSTS);

   //  ForkJoin.....................................
   forkJoin([users, posts]).subscribe( res => {
    this.data = res;
    console.log('User and Posts data', res);
   })


   }

   getData(data) {
    return of(data + ' Video uploaded');
   }

  ngOnInit() {

    // Using Mergemap...............................................
    const obs1 = from(['Tech', 'Comedy', 'News']);

    // obs1.pipe(
    //   map(res => this.getData(res))
    // ).subscribe(res => res.subscribe(res2 => {
    //   console.log(res2);
    // }));

    obs1.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
    })


    // of operator..................................................
    const ofObs = of([1,2,3]);
    ofObs.subscribe(res=>{console.log('of Example',res);
    });

    // from operator .............................................
    const fromObs = from([1,2,3]);
    fromObs.subscribe(res=>{console.log('From Example',res);
    });

    // Take operator............................................
    const source = interval(1000);
    source.pipe(
      take(5)).subscribe(res=>{
        console.log('Take Operator',res)})

    // Take Last..........................................
    let lastNames = ['html','Java','TS','Angular'];
    const result = from(lastNames);
    result.pipe(
      takeLast(2)).subscribe(res=>{
        console.log('Take Last Example',res);
      })

      // Take Until.......................................................
      const custObs = interval(1000);
      let condition = timer(6000);
      custObs.pipe(
        takeUntil(condition)
      ).subscribe(res=>{console.log('TakeUntil',res);
      })

      // forkjoin...........................................................


  }

}
