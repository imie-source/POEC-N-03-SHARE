package fr.imie.test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import fr.imie.game.Jeux;

public class TestTP1 {

	Jeux jeux;

	@Before
	public void setUp() throws Exception {
		jeux = new Jeux();
	}

	@Test
	public void testGetScoreInitJeux0_0() {
		// Arrange
		// Act
		String score = jeux.getScore();
		// Assert
		assertEquals("0-0", score);
	}

	@Test
	public void testGetScoreFirstPoint15_0() {
		// Arrange
		// Act
		firstPointJ1();
		String score = jeux.getScore();
		// Assert
		assertEquals("15-0", score);
	}

	@Test
	public void testGetScoreOnePointPerGamer15_15() {
		// Arrange
		firstPointJ1();
		// Act
		jeux.marquerJoueur2();
		String score = jeux.getScore();
		// Assert
		assertEquals("15-15", score);
	}

	@Test
	public void testGetScoreAvJ1afterEgaliteAvJ1() {
		// Arrange
		egalite();
		// Act
		jeux.marquerJoueur1();
		String score = jeux.getScore();
		// Assert
		assertEquals("avantage J1", score);
	}
	
	@Test
	public void testGetScoreRetourEgaliteEgalite() {
		// Arrange
		egalite();
		jeux.marquerJoueur1();
		// Act
		jeux.marquerJoueur2();
		String score = jeux.getScore();
		// Assert
		assertEquals("Egalite", score);
	}
	
	public void firstPointJ1() {
		jeux.marquerJoueur1();
	}

	public void egalite() {
		jeux.marquerJoueur1();
		jeux.marquerJoueur1();
		jeux.marquerJoueur1();
		jeux.marquerJoueur2();
		jeux.marquerJoueur2();
		jeux.marquerJoueur2();
	}

	
}
