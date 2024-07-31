import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { CaptionProps, DayPicker, useNavigation } from "react-day-picker";
import { buttonVariants } from "./button";
import { cn } from "lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function CustomCaption({ displayMonth }: CaptionProps) {
  const { goToMonth, previousMonth, nextMonth } = useNavigation();

  const month = displayMonth.toLocaleString("default", { month: "long" });
  const year = displayMonth.getFullYear();

  return (
    <>
      <div className="relative flex items-center justify-between px-2 py-0 font-Medium">
        <span className="text-xl">
          {month} {year}
        </span>
        <div>
          <button
            type="button"
            onClick={() => previousMonth && goToMonth(previousMonth)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-7 w-7 bg-transparent p-0 hover:opacity-100"
            )}
            aria-label="Previous Month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => nextMonth && goToMonth(nextMonth)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-7 w-7 bg-transparent p-0"
            )}
            aria-label="Next Month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <hr className="bg-neutral-200" />
    </>
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-full"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary-500 text-white rounded-full",
        day_today: "text-destructive-500",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Caption: CustomCaption,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
