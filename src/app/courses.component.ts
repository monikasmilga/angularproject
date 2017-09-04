import { Component } from '@angular/core';
@Component ({
    selector: 'courses',
    template: `<h2> {{ title }}</h2>
    <ul><li *ngFor="let course of courses">{{ course }}</li></ul>`
})
export class CoursesComponent {
    title = 'world!';
    courses = ["K1", "K2", "K3"];
}
