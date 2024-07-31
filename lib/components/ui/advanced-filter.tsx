import { Button } from "./button";
import { Separator } from "./separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

interface Props {
  className?: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  onApplyFilter: () => void;
}

export const AdvancedFilter = ({
  actions,
  children,
  title,
  trigger,
  onApplyFilter,
}: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent className="w-80 px-9 py-12">
        <SheetHeader className="pb-8">
          <SheetDescription className="flex items-center justify-between">
            <span className="text-base font-medium text-black">{title}</span>
            {actions}
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-3" />
        {children}
        <div className="flex w-full justify-end gap-4 pt-9">
          <SheetClose>
            <Button variant={"secondary"}>Cancel</Button>
          </SheetClose>
          <Button onClick={onApplyFilter}>Apply Filter</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
