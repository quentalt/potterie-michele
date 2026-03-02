import { cn } from "@/lib/utils";

interface BigTitleProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function BigTitle({ children, className, as: Tag = "h1" }: BigTitleProps) {
    return (
        <Tag
            className={cn(
                "font-kufam font-semibold text-7xl tracking-tight text-primary md:text-8xl",
                className
            )}
        >
            {children}
        </Tag>
    );
}