package com.webcamp.exception;

import org.springframework.http.HttpStatus;

public class UserExceoption extends AppException {
    protected UserExceoption(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}