import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    items!: MenuItem[];
    constructor(private router: Router,) { }

    ngOnInit(): void {
        this.items = [

            {
                label: 'Features',

                items: [
                    {
                        label: 'Scheduling',
                        icon: 'pi pi-stop-circle',
                        command: () => {
                            this.router.navigateByUrl('/scheduling');
                        },
                    },
                    {
                        label: 'GPS Geofence',
                        icon: 'pi pi-stop-circle',
                        command: () => {
                            this.router.navigateByUrl('/geofence');
                        },
                    },
                    {
                        label: 'Clock In/ Out',
                        icon: 'pi pi-stop-circle',
                        command: () => {
                            this.router.navigateByUrl('/clock-in');
                        },
                    },
                    {
                        label: 'Task & Past',
                        icon: 'pi pi-stop-circle',
                        command: () => {
                            this.router.navigateByUrl('/task-management');
                        },

                    },
                    {
                        label: 'Timesheet',
                        icon: 'pi pi-stop-circle',
                        command: () => {
                            this.router.navigateByUrl('/cost-analysis');
                        },
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-stop-circle',
                        command: () => {
                            this.router.navigateByUrl('/chat-system');
                        },
                    }
                ]
            },


            {
                label: 'About',
                command: () => {
                    this.router.navigateByUrl('/about');

                },

            },
            {
                label: 'Pricing',
                command: () => {
                    this.router.navigateByUrl('/pricing');

                },

            }
        ];
    }

    login() {
        console.log("This is logging");
        window.location.href = 'https://dk42u1166opeo.cloudfront.net/auth/login';
    }
    

}
