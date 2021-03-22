package com.richiecodes.game;

import com.richiecodes.card.Card;
import com.richiecodes.util.Console;

public class Main {

    public static void main(String[] args) {
        //TODO: check for existing save file, create if none
        //TODO: load player info from file in com.richiecodes.playerdata package

        Card myCard = new Card("4", "diamonds");
        System.out.println(Console.getString("Enter info:"));
    }
}
