
import { Heading } from "@radix-ui/themes";
import { Form } from "radix-ui";
import { useEffect, useState } from "react";
import { DaySelect, EventDetailDialog, SimpleSelect, TextField } from "@components";
import { EDayOfWeek, EEventType } from "@enums";
import { IEventResponse } from "@types";
import { getISOString } from "@utils";
import { EventDialogProps } from "../types";

export default function EventDialog({ dialogInfo, setDialogInfo, onSubmitForm }: EventDialogProps) {
  const [eventType, setEventType] = useState(EEventType.APPOINTMENT);
  const [byDate, setByDate] = useState<EDayOfWeek[]>([]);

  const closeEventDialog = () => {
    setDialogInfo({ event: null, open: false });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { title, startDate, endDate, ...restFormValues } = Object.fromEntries(formData.entries());

    const values: IEventResponse = {
      id: dialogInfo.event?.id,
      title: title as string,
      startDate: startDate as string,
      endDate: endDate as string,
      type: eventType,
      recurrence:
        eventType === EEventType.EVENT
          ? {
              frequency: "DAILY",
              byDay: byDate,
            }
          : null,
      client:
        eventType === EEventType.APPOINTMENT
          ? {
              name: restFormValues?.clientName as string,
              email: restFormValues?.clientEmail as string,
              avatar: restFormValues?.clientAvatar as string,
              webURL: restFormValues?.clientWebURL as string,
            }
          : null,
    };

    onSubmitForm(values);
  };

  useEffect(() => {
    if (dialogInfo.event?.extendedProps.type) setEventType(dialogInfo.event?.extendedProps.type);
  }, [dialogInfo.event?.extendedProps.type]);

  return (
    <EventDetailDialog
      event={dialogInfo.event}
      open={dialogInfo.open}
      onOpenChange={(open) => {
        if (!open) closeEventDialog();
      }}
    >
      <Form.Root
        className="flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <TextField
          label="Event Title"
          name="title"
          defaultValue={dialogInfo?.event?.title}
        />

        <TextField
          label="Start Date"
          name="startDate"
          type="datetime-local"
          defaultValue={getISOString(dialogInfo?.event?.start)}
        />

        <TextField
          label="End Date"
          name="endDate"
          type="datetime-local"
          defaultValue={getISOString(dialogInfo?.event?.end)}
        />

        <SimpleSelect
          label="Event type"
          options={[
            { value: EEventType.APPOINTMENT, label: "Appointment" },
            { value: EEventType.EVENT, label: "Event" },
          ]}
          placeholder="Choose a type event..."
          value={eventType}
          onValueChange={(value) => setEventType(value as EEventType)}
          className="w-full bg-white text-black"
        />

        {eventType === EEventType.EVENT && (
          <DaySelect
            value={dialogInfo?.event?.rrule?.byweekday}
            onChange={(selectedOptions) => setByDate(selectedOptions)}
          />
        )}

        {eventType === EEventType.APPOINTMENT && (
          <>
            <hr />

            <Heading size="5">Client Info</Heading>

            <TextField
              label="Client Name"
              name="clientName"
              defaultValue={dialogInfo?.event?.extendedProps?.client?.name}
            />

            <TextField
              label="Email"
              name="clientEmail"
              type="email"
              defaultValue={dialogInfo?.event?.extendedProps?.client?.email}
            />

            <TextField
              label="Avatar URL"
              name="clientAvatar"
              defaultValue={dialogInfo?.event?.extendedProps?.client?.avatar}
            />

            <TextField
              label="Web URL"
              name="clientWebURL"
              defaultValue={dialogInfo?.event?.extendedProps?.client?.webURL}
            />
          </>
        )}
        <Form.Submit className="border-1 border-solid border-dark-blue bg-dark-blue rounded-lg py-2 text-white w-full">Update</Form.Submit>
      </Form.Root>
    </EventDetailDialog>
  );
}
