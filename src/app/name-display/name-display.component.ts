import { Component, OnInit } from "@angular/core";
import { NameService } from "../name.service";

@Component({
  selector: "app-name-display",
  templateUrl: "./name-display.component.html",
  styleUrls: ["./name-display.component.css"],
})
export class NameDisplayComponent implements OnInit {
  newName: string;
  constructor(private service: NameService) {}

  ngOnInit(): void {}
  getNewName() {
    this.newName = this.service.getName();
  }
}
