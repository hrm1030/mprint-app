/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 40404
 Source Host           : localhost:27017
 Source Schema         : mprint

 Target Server Type    : MongoDB
 Target Server Version : 40404
 File Encoding         : 65001

 Date: 03/06/2021 06:27:36
*/


// ----------------------------
// Collection structure for customers
// ----------------------------
db.getCollection("customers").drop();
db.createCollection("customers");

// ----------------------------
// Documents of customers
// ----------------------------
db.getCollection("customers").insert([ {
    _id: ObjectId("60b44e080116e543b85fa185"),
    name: "Wilson",
    contactperson: "Jackson",
    "tel_1": NumberInt("145467"),
    "tel_2": NumberInt("4564647"),
    fax: NumberInt("44643"),
    email: "wilson@outlook.com",
    address: "adfsdfasdf",
    other: "adsfsdfsdfads",
    loyalty: "newbie",
    "is_active": NumberInt("1"),
    __v: NumberInt("0")
} ]);
db.getCollection("customers").insert([ {
    _id: ObjectId("60b474f365261d11a81fe54f"),
    name: "dfsd",
    contactperson: "sdfs",
    "tel_1": NumberInt("34234"),
    "tel_2": NumberInt("2342342"),
    fax: NumberInt("2342423"),
    email: "hello@sdfs.com",
    address: "sdfsdfsdf",
    other: "sdfsdfdas",
    loyalty: "newbie",
    "is_active": NumberInt("1"),
    __v: NumberInt("0")
} ]);
db.getCollection("customers").insert([ {
    _id: ObjectId("60b8d5a665355a3cac00d50b"),
    name: "Maksim",
    contactperson: "Kiril",
    "tel_1": 4787545845,
    "tel_2": NumberInt("458421545"),
    fax: NumberInt("21546"),
    email: "dmitriy@mail.ru",
    address: "Tomsk",
    other: "Others..................",
    loyalty: "newbie",
    "is_active": NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("customers").insert([ {
    _id: ObjectId("60b8d8264203282880f3129d"),
    name: "Jim",
    contactperson: "Dmitriy",
    "tel_1": NumberInt("754896512"),
    "tel_2": NumberInt("754896555"),
    fax: NumberInt("124568"),
    email: "jim@mail.ru",
    address: "Tomsk.......",
    other: "others............\r\nand Line id.",
    loyalty: "newbie",
    "is_active": NumberInt("1"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("60b3ba749c7952106c619176"),
    username: "hrm",
    email: "hrm.2021@outlook.com",
    password: "$2a$08$H6X8bMdqvu3ljtDNd66NGOTykCTB.nlV7V1p92M.lcBx/2d5Y69MW",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60b3bc6ee9c73201100c6718"),
    username: "hrm2021",
    email: "hrm.2021@outlook.com",
    password: "$2a$08$lbaYyRJpUtVrKVS3ElUSc.nYvD5lTfiwwhQp2I4NHwGgeicZacniK",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60b8d53f65355a3cac00d50a"),
    username: "Dmitriy",
    email: "dmitriy@mail.ru",
    password: "$2a$08$v22Qac1ZwrFtvq5JirIRb.cZ2YIJgZpU0gYXRzMstm3vDxxf0P7IS",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60b8d7df4203282880f3129c"),
    username: "Jim",
    email: "jim@mail.ru",
    password: "$2a$08$Er5hcjvcKrcu8heYCRhKHum9mBe9v62RBPqY17.m1vXOXe3TR9wGK",
    __v: NumberInt("0")
} ]);
