import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  key?: string;  
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrl = 'https://notes-94cd2-default-rtdb.firebaseio.com/notes.json';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<{ [key: string]: Note }> {
    return this.http.get<{ [key: string]: Note }>(this.baseUrl);
  }

  addNote(note: Note): Observable<any> {
    return this.http.post(this.baseUrl, note);
  }

  updateNote(id: string, note: Note): Observable<any> {
    return this.http.put(`https://notes-94cd2-default-rtdb.firebaseio.com/notes/${id}.json`, note);
  }

  getNote(id: string): Observable<Note> {
  return this.http.get<Note>(`https://notes-94cd2-default-rtdb.firebaseio.com/notes/${id}.json`);   
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`https://notes-94cd2-default-rtdb.firebaseio.com/notes/${id}.json`);
  }
}
