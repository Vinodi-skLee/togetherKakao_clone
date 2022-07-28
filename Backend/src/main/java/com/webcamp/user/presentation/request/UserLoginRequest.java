package com.webcamp.user.presentation.request;

import com.webcamp.user.application.dto.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserLoginRequest {
    private String name;
    private String email;

    public UserDto userDto(){
        return new UserDto(name, email);
    }
}