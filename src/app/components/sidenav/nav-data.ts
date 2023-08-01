import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'work-request',
        icon: 'fal fa-exclamation-triangle',
        label: 'Work Request',
        items: [
            {
                routeLink: 'work-request/create-work-request',
                label: 'Create Work Request'
            },
            {
                routeLink: 'work-request/work-request-archive',
                label: 'Work Request Archive'
            },
            {
                routeLink: 'work-request/open-remarks',
                label: 'Open Remarks'
            }
        ]
    },
    {
        routeLink: 'work-orders',
        icon: 'fal fa-clipboard-list',
        label: 'Work Orders',
        items: [
            {
                routeLink: 'work-orders/preventive-maintenance-wo',
                label: 'Preventive Maintenance WO'
            },
            {
                routeLink: 'work-orders/permit-list',
                label: 'Permit List'
            },
            {
                routeLink: 'work-orders/internal-has',
                label: 'Internal HAS'
            },
            {
                routeLink: 'work-orders/work-orders-archive',
                label: 'Work Orders Archive'
            },
            {
                routeLink: 'work-orders/wo-schedule',
                label: 'WO Schedule'
            }
        ]
    },
    {
        routeLink: 'staff',
        icon: 'fal fa-users',
        label: 'Staff',
        items: [
            {
                routeLink: 'staff/employees',
                label: 'Employees'
            },
            {
                routeLink: 'staff/employee-schedule',
                label: 'Employee Schedule'
            },
            {
                routeLink: 'staff/internal-tools',
                label: 'Internal Tools'
            },
            {
                routeLink: 'staff/logins',
                label: 'Logins'
            }
        ]
    },
    {
        routeLink: 'google-maps',
        icon: 'fal fa-map',
        label: 'Google Maps',
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        items: [
            {
                routeLink: 'settings/settings1.1',
                label: 'settings1.1',
                items: [
                    {
                        routeLink: 'settings/settings2.1',
                        label: 'settings2.1'
                    },
                    {
                        routeLink: 'settings/settings2.2',
                        label: 'settings2.2'
                    },
                    {
                        routeLink: 'settings/settings2.3',
                        label: 'settings2.3'
                    },
                    {
                        routeLink: 'settings/settings2.4',
                        label: 'settings2.4'
                    }
                ]
            },
            {
                routeLink: 'settings/settings1.2',
                label: 'settings1.2'
            },
            {
                routeLink: 'settings/settings1.3',
                label: 'settings1.3'
            },
            {
                routeLink: 'settings/settings1.4',
                label: 'settings1.4',
                items: [
                    {
                        routeLink: 'settings/settings2.1',
                        label: 'settings2.1',
                        items: [
                            {
                                routeLink: 'settings/settings3.1',
                                label: 'settings3.1'
                            },
                            {
                                routeLink: 'settings/settings3.2',
                                label: 'settings3.2'
                            },
                            {
                                routeLink: 'settings/settings3.3',
                                label: 'settings3.3'
                            },
                            {
                                routeLink: 'settings/settings3.4',
                                label: 'settings3.4'
                            }
                        ]
                    },
                    {
                        routeLink: 'settings/settings2.2',
                        label: 'settings2.2'
                    },
                    {
                        routeLink: 'settings/settings2.3',
                        label: 'settings2.3'
                    },
                    {
                        routeLink: 'settings/settings2.4',
                        label: 'settings2.4'
                    }
                ]
            }
        ]
    }
];