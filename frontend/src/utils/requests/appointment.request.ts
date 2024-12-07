import { Endpoint } from "../../constants/endpoint";
import { Api } from "../fetch";
import { IBookingAppointmentPayload } from "../../interfaces/booking.payload";
import { IAppointmentResponse } from "../../interfaces/booking.response";

export const BookingAppointmentRequest = async (
  props: IBookingAppointmentPayload
): Promise<IAppointmentResponse> => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  let headers: any;
  if (!props.headers) {
    headers = {
      "Content-Type": "application/json",
      ...(props.dentist_fullname
        ? {
            dentist_fullname: props.dentist_fullname,
            appointment_date: props.appointment_date,
            client_id: props.client_id,
          }
        : {}),
    };
  } else {
    headers = props.headers;
  }

  const appointmentResponse = await Api({
    url: `${BASE_URL}${Endpoint.booking}/${props.process}`,
    method: props.method,
    headers,
    data: props.data,
  });
  return appointmentResponse;
};
