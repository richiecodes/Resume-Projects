package com.richiecodes.util;

import java.util.Scanner;

public class Console {
    static Scanner scanner = new Scanner(System.in);

    public Console() {}

    public static String getProperString(String n) {
        return (n.substring(0,1).toUpperCase() + n.substring(1));
    }

    public static int getInt(int min, int max, String q) {
        int out;
        do {
            System.out.println(q);
            out = scanner.nextInt();
        } while(out < min || out > max);

        return out;
    }

    public static String getString(String q) {
        String out;
        System.out.println(q);
        out = scanner.next();

        return getProperString(out);
    }
}
