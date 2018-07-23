import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserModel } from './model/user-model';
import { AlbumModel } from './model/album-model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public selectedUser = new BehaviorSubject<UserModel>(null);
  public selectedAlbums = new BehaviorSubject<Array<AlbumModel>>(null);
  private selectedAlbumsList = new Array<AlbumModel>();

  constructor() { }

  public setSelectedUser(user: UserModel) {
    this.selectedAlbumsList = new Array<AlbumModel>();
    this.selectedUser.next(user);
  }

  public setSelectedAlbums(album: AlbumModel) {
    const index = this.selectedAlbumsList.indexOf(album);
    if(index === -1) {
      this.selectedAlbumsList.push(album);
    } else {
      this.selectedAlbumsList.splice(index, 1);
    }    
    this.selectedAlbums.next(this.selectedAlbumsList);
  }
}
