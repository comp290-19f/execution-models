export class Node {
    data: number;
    next: Node;
}

export let cons = (n: number, next: Node): Node => {
    let head = new Node();
    head.data = n;
    head.next = next;
    return head;
}

export let first = (head: Node): number => {
    return head.data;
};

export let rest = (head: Node): Node => {
    return head.next;
};
