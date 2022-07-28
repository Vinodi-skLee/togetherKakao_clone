package com.webcamp.user.presentation.request;

import com.webcamp.user.application.dto.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserUpdateRequest {
    private Long id;
    private String name;
    private String email;

    public UserDto userUpdateDto(){
        return new UserDto(name, email);
    }
}