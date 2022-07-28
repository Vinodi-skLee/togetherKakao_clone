package com.webcamp.user.presentation;

import com.webcamp.user.application.UserService;
import com.webcamp.user.application.dto.UserDto;
import com.webcamp.user.presentation.request.UserIdRequest;
import com.webcamp.user.presentation.request.UserLoginRequest;
import com.webcamp.user.presentation.request.UserUpdateRequest;
import com.webcamp.user.presentation.response.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody UserLoginRequest request) {
        UserDto userDto = userService.userLogin(request.userDto());
        UserResponse response =  userDto.userResponse();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/user")
    public ResponseEntity<UserResponse> getUserById(@RequestParam Long id) {
        UserDto userDto = userService.findById(id);
        UserResponse response =  userDto.userResponse();

        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/update")
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserUpdateRequest request) {
        UserDto userUpdate = userService.updateUser(request.getId(), request.userUpdateDto());
        UserResponse response = userUpdate.userResponse();

        return ResponseEntity.ok(response);
    }

    @PostMapping("/user/delete")
    public ResponseEntity<Long> deleteUser(@RequestBody UserIdRequest request) {
        Long id = request.getId();
        userService.deleteUser(id);

        return ResponseEntity.ok(id);
    }

}

