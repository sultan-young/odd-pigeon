interface Tree {
    key: string;
    children?: Tree[];
    [props: string]: any;
}

export {
    Tree,
}