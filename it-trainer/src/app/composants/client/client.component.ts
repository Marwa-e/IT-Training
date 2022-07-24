import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  id = 0 // TODO : A REVOIR
  client: Client ={};
  clients: Client[]=[];

  constructor(private route: ActivatedRoute,private cl:ClientService,private router : Router) { }

  ngOnInit(): void {
    this.initClient()
  }

  ajouterClient(){
    this.cl.addClient(this.client).subscribe(res=>{
      this.initClient()
    })
  }

  ajouterALaListe(){
    this.clients.push({...this.client}); //spread operator
    this.client={};
  }

  supprimerClient(id : number){
    this.cl.delClient(id).subscribe(res=>{
      this.initClient()
    })
  }

  modifierClient(){
    this.cl.updateClient(this.client).subscribe(res => {
      this.router.navigateByUrl('/client');
    })
  }

  initClient(){

    // this.route.paramMap.subscribe(res =>{
    //   this.id=Number(res.get('id'));

      this.cl.getAllClients().subscribe(res =>{
        this.clients = res;
      })

    // }
    // )
  }

}
