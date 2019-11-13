import { Node, cons, first, rest } from "./Node";
import * as process from "process";

let main = () => {
    console.log("Linked Lists!");

    let list = cons(1, cons(2, cons(3, null)));
    print_list(list);

    console.log("sum: " + sum(list));
};

let print_list = (head: Node): void => {
    while (head != null) {
        process.stdout.write(first(head) + " -> ");
        head = rest(head);
    }
    console.log("null");
};

let sum = (head: Node): number => {
    let sum = 0;
    while (head != null) {
        sum += first(head);
        head = rest(head);
    }
    return sum;
};

main();
