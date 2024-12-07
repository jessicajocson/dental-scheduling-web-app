import { Endpoint } from "../../constants/endpoint";
import { Api } from "../fetch";
import { IBookingSchedulePayload } from "../../interfaces/booking.payload";
import { IScheduleResponse } from "../../interfaces/booking.response";

export const BookingScheduleRequest = async (
  props: IBookingSchedulePayload
): Promise<IScheduleResponse> => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const scheduleResponse = await Api({
    url: `${BASE_URL}${Endpoint.booking}/${props.process}`,
    method: props.method,
    headers: {
      "Content-Type": "application/json",
      ...(props.schedule_day ? { schedule_day: props.schedule_day } : {}),
    },
  });

  console.log(scheduleResponse);
  return scheduleResponse;
};
