package minesweeper.backend.domain;

import javax.persistence.Entity;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
public class Result extends AbstractPersistable<Long> implements Comparable<Result> {
	
	@NotNull
	@Size(min = 2, max = 30)
	private String nickname;
	
	@NotNull
	@Size(min = 2, max = 30)
	private String difficulty;
	
	@NotNull
	@Min(1)
	@Max(10000)
	private Integer time;
	
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getDifficulty() {
		return difficulty;
	}
	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}
	public Integer getTime() {
		return time;
	}
	public void setTime(Integer time) {
		this.time = time;
	}
	
	@Override
	public int compareTo(Result o) {
		return this.time - o.getTime();
	}
}
