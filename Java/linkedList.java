public class linkedList{
    static node head = null;
    static node pointer = head;
    static class node{
        int data;
        node link;
        node(int data){
            this.data = data;
            this.link = null;
        }
    }

    public static void addItem(int data){
        node newNode = new node(data);
        if(head == null){
            head = newNode;
            pointer = head;
            System.out.println("added a new node to head'");
        }else{
            pointer.link = newNode;
            pointer = newNode;
            System.out.println("added a new node");

        }
    }

    public static void main(String[] args){
        addItem(10);
    }
}
