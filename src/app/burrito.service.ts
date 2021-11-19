import {Injectable, OnInit} from "@angular/core";  // TODO
import {BehaviorSubject} from "rxjs";
import {Burrito} from "./misc/burrito.type";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BurritoService {

  private burritos$$ = new BehaviorSubject<Burrito[]>([]);
  public burritos$ = this.burritos$$.asObservable();

  public constructor(
    private httpClient: HttpClient,
  ) {
    this.httpClient.get<Burrito[]>('burritos')
      .subscribe(burritos => this.burritos$$.next(burritos));
  }
}
