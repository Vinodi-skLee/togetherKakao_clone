package com.webcamp.exception;

import org.springframework.http.HttpStatus;
public class UserNotFoundException extends UserExceoption{
    public UserNotFoundException() {super("해당 유저는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}
