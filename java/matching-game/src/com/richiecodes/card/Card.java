package com.richiecodes.card;

import com.richiecodes.util.Console;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Card {
    //TODO: Build class and test output value

    private String value = "", suit = "";

    public Card(String value, String suit) {
        setValue(value);
        setSuit(suit);
    }

    public List<String> getValidValues() {
        return Arrays.asList("ace",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "jack",
                "queen",
                "king");
    }

    public List<String> getValidSuits() {
        return Arrays.asList("diamonds", "spades", "hearts", "clubs");
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        if(getValidValues().contains(value)) {
            this.value = value;
        } else throw new IllegalArgumentException("Illegal value assigned");
    }

    public String getSuit() {
        return suit;
    }

    public void setSuit(String suit) {
        if(getValidSuits().contains(suit))
            this.suit = suit;
        else throw new IllegalArgumentException("Illegal Suit Assigned");
    }

    @Override
    public String toString() { //Capitalizes first letter of value and suit
        return String.format("%s of %s", Console.getProperString(value),
                Console.getProperString(suit));
    }
}