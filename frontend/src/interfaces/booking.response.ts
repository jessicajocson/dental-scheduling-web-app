export interface IScheduleList {
    id: number;
    dentist_id: number;
    schedule_day: string;
    schedule_time: string;
    dentist_name: string;
}

export interface IAppointmentList {
    id: number;
    dentist_id: number;
    schedule_id: number;
    client_id: number;
    service_id: number;
    appointment_date: Date;
    schedule_time: string;
    status: "Completed" | "Pending";
    dentist_name: string;
    service_name: string;
}

export interface IScheduleResponse {
    schedules: IScheduleList[];
    status: number;
}

export interface IAppointmentResponse {
    appointments: IAppointmentList[];
    status: number;
}