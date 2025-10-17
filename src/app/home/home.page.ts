import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule,IonicModule, RouterModule],
})
export class HomePage implements OnInit {
  notes: Note[] = [];
  newNote: Note = { title: '', content: '' };

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.getNotes();
  }

  ionViewWillEnter() {
  this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = []
         for (let key in data) {
      this.notes.push({ key, ...data[key] });
    }
    });
  }

  addNote() {
    if (this.newNote.title.trim() && this.newNote.content.trim()) {
      this.noteService.addNote(this.newNote).subscribe(() => {
        this.newNote = { title: '', content: '' };
        this.getNotes();
      });
    }
  }

  deleteNote(key?: string) {
    if (!key) return;
    this.noteService.deleteNote(key).subscribe(() => this.getNotes());
  }

}
