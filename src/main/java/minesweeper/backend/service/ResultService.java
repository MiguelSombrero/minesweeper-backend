package minesweeper.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import minesweeper.backend.domain.Result;
import minesweeper.backend.repository.ResultRepository;

@Service
public class ResultService {

	@Autowired
	private ResultRepository repository;
	
	public List<Result> findAll() {
		return repository.findAll(Sort.by("time"));
	}
	
	public Result create(Result result) {
		return repository.save(result);
	}
	
	
}
