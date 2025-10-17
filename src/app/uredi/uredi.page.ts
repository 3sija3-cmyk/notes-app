import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NoteService, Note } from '../note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-uredi',
  templateUrl: './uredi.page.html',
  styleUrls: ['./uredi.page.scss'],
  standalone: true,
  imports:[CommonModule,FormsModule,IonicModule,RouterModule],
})

export class UrediPage implements OnInit {

  noteId: string = '';
  note: Note = { title: '', content: '' };


  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) {}

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id')!;
    this.noteService.getNote(this.noteId).subscribe(data => {
      if (data) this.note = data;
    });
  }

  updateNote() {
    this.noteService.updateNote( this.noteId,this.note).subscribe(() => {
      this.router.navigateByUrl('/home');
      
    });
  }
  cancelEdit() {
    this.router.navigateByUrl('/home');
  }

}
