package minesweeper.backend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import minesweeper.backend.domain.Result;
import minesweeper.backend.service.ResultService;

@RestController
public class ResultController {

	@Autowired
	private ResultService service;
	
	@GetMapping("/results")
	private List<Result> findAll() {
		return service.findAll();
	}
	
	@PostMapping("/results")
	private Result create(@Valid @RequestBody Result result) {
		return service.create(result);
	}
}
