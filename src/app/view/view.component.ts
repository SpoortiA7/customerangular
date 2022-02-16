import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  result: any;
  newID: any;

  constructor(private myservice:MyserviceService, private router:Router) { }

  ngOnInit(): void {
    this.myservice.viewcustomer().subscribe(r=>{this.result=r;});
  }
  addcus()
  {
    this.router.navigate(['/addcustomer']);
  }
deletecus(Id:any)
{
  this.myservice.deletecustomer(Id).subscribe((r:any)=>{this.result=r; window.location.reload();});
}
updatecus(CustomerID:any)
{
  this.newID=CustomerID
  alert(CustomerID);
  this.router.navigate(['/update',CustomerID]);
}
}
